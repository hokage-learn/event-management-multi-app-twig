import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from './AuthContext';

const TicketContext = createContext();

export const useTickets = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('useTickets must be used within a TicketProvider');
  }
  return context;
};

export const TicketProvider = ({ children }) => {
  const { user } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load tickets from localStorage on mount and when user changes
  useEffect(() => {
    const loadTickets = () => {
      try {
        if (!user) {
          setTickets([]);
          setLoading(false);
          return;
        }

        // Get all tickets from localStorage
        const allTickets = JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]');
        
        // Filter tickets for current user
        const userTickets = allTickets.filter(ticket => ticket.userId === user.id);
        
        // Set tickets - empty array if user has no tickets
        setTickets(userTickets);
      } catch (error) {
        console.error('Error loading tickets:', error);
        toast.error('Failed to load tickets');
      } finally {
        setLoading(false);
      }
    };

    loadTickets();
  }, [user]);

  const createTicket = (ticketData) => {
    try {
      if (!user) {
        toast.error('You must be logged in to create a ticket');
        return { success: false, error: 'Not authenticated' };
      }

      const newTicket = {
        id: Date.now().toString(),
        userId: user.id,
        ...ticketData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      // Update local state
      const updatedTickets = [...tickets, newTicket];
      setTickets(updatedTickets);
      
      // Update localStorage with all tickets (preserving other users' tickets)
      const allTickets = JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]');
      const allTicketsUpdated = [...allTickets, newTicket];
      localStorage.setItem('ticketapp_tickets', JSON.stringify(allTicketsUpdated));
      
      toast.success('Ticket created successfully!');
      return { success: true, ticket: newTicket };
    } catch (error) {
      console.error('Error creating ticket:', error);
      toast.error('Failed to create ticket');
      return { success: false, error: 'Failed to create ticket' };
    }
  };

  const updateTicket = (id, updates) => {
    try {
      if (!user) {
        toast.error('You must be logged in to update a ticket');
        return { success: false, error: 'Not authenticated' };
      }

      // Update local state
      const updatedTickets = tickets.map(ticket => 
        ticket.id === id 
          ? { ...ticket, ...updates, updatedAt: new Date().toISOString() }
          : ticket
      );
      
      setTickets(updatedTickets);
      
      // Update localStorage with all tickets
      const allTickets = JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]');
      const allTicketsUpdated = allTickets.map(ticket =>
        ticket.id === id
          ? { ...ticket, ...updates, updatedAt: new Date().toISOString() }
          : ticket
      );
      localStorage.setItem('ticketapp_tickets', JSON.stringify(allTicketsUpdated));
      
      toast.success('Ticket updated successfully!');
      return { success: true };
    } catch (error) {
      console.error('Error updating ticket:', error);
      toast.error('Failed to update ticket');
      return { success: false, error: 'Failed to update ticket' };
    }
  };

  const deleteTicket = (id) => {
    try {
      if (!user) {
        toast.error('You must be logged in to delete a ticket');
        return { success: false, error: 'Not authenticated' };
      }

      // Update local state
      const updatedTickets = tickets.filter(ticket => ticket.id !== id);
      setTickets(updatedTickets);
      
      // Update localStorage with all tickets
      const allTickets = JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]');
      const allTicketsUpdated = allTickets.filter(ticket => ticket.id !== id);
      localStorage.setItem('ticketapp_tickets', JSON.stringify(allTicketsUpdated));
      
      toast.success('Ticket deleted successfully!');
      return { success: true };
    } catch (error) {
      console.error('Error deleting ticket:', error);
      toast.error('Failed to delete ticket');
      return { success: false, error: 'Failed to delete ticket' };
    }
  };

  const getTicketById = (id) => {
    return tickets.find(ticket => ticket.id === id);
  };

  const getTicketsByStatus = (status) => {
    return tickets.filter(ticket => ticket.status === status);
  };

  const getStats = () => {
    const total = tickets.length;
    const open = tickets.filter(ticket => ticket.status === 'open').length;
    const inProgress = tickets.filter(ticket => ticket.status === 'in_progress').length;
    const closed = tickets.filter(ticket => ticket.status === 'closed').length;
    
    return {
      total,
      open,
      inProgress,
      closed
    };
  };

  const value = {
    tickets,
    loading,
    createTicket,
    updateTicket,
    deleteTicket,
    getTicketById,
    getTicketsByStatus,
    getStats
  };

  return (
    <TicketContext.Provider value={value}>
      {children}
    </TicketContext.Provider>
  );
};
