// Tickets Management Module

const Tickets = {
  TICKETS_KEY: 'ticketapp_tickets',

  /**
   * Get all tickets for current user
   * @returns {array}
   */
  getTickets() {
    const user = Auth.getCurrentUser();
    if (!user) return [];

    const allTickets = Storage.get(this.TICKETS_KEY) || [];
    return allTickets.filter(ticket => ticket.userId === user.id);
  },

  /**
   * Get tickets by status
   * @param {string} status - open, in-progress, closed
   * @returns {array}
   */
  getTicketsByStatus(status) {
    return this.getTickets().filter(ticket => ticket.status === status);
  },

  /**
   * Get ticket by ID
   * @param {string} id
   * @returns {object|null}
   */
  getTicketById(id) {
    const tickets = this.getTickets();
    return tickets.find(ticket => ticket.id === id) || null;
  },

  /**
   * Create new ticket
   * @param {object} ticketData - {title, description, status, priority}
   * @returns {object} {success: boolean, ticket?: object, error?: string}
   */
  createTicket(ticketData) {
    const user = Auth.getCurrentUser();
    if (!user) {
      Toast.error('You must be logged in to create tickets');
      return { success: false, error: 'Not authenticated' };
    }

    if (!ticketData.title || ticketData.title.trim() === '') {
      Toast.error('Title is required');
      return { success: false, error: 'Title is required' };
    }

    const newTicket = {
      id: Date.now().toString(),
      userId: user.id,
      title: ticketData.title.trim(),
      description: ticketData.description?.trim() || '',
      status: ticketData.status || 'open',
      priority: ticketData.priority || 'medium',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const allTickets = Storage.get(this.TICKETS_KEY) || [];
    allTickets.push(newTicket);
    Storage.set(this.TICKETS_KEY, allTickets);

    Toast.success('Ticket created successfully!');
    return { success: true, ticket: newTicket };
  },

  /**
   * Update existing ticket
   * @param {string} id
   * @param {object} updates
   * @returns {object} {success: boolean, ticket?: object, error?: string}
   */
  updateTicket(id, updates) {
    const user = Auth.getCurrentUser();
    if (!user) {
      Toast.error('You must be logged in to update tickets');
      return { success: false, error: 'Not authenticated' };
    }

    const allTickets = Storage.get(this.TICKETS_KEY) || [];
    const ticketIndex = allTickets.findIndex(t => t.id === id && t.userId === user.id);

    if (ticketIndex === -1) {
      Toast.error('Ticket not found');
      return { success: false, error: 'Ticket not found' };
    }

    allTickets[ticketIndex] = {
      ...allTickets[ticketIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };

    Storage.set(this.TICKETS_KEY, allTickets);
    Toast.success('Ticket updated successfully!');
    return { success: true, ticket: allTickets[ticketIndex] };
  },

  /**
   * Delete ticket
   * @param {string} id
   * @returns {object} {success: boolean, error?: string}
   */
  deleteTicket(id) {
    const user = Auth.getCurrentUser();
    if (!user) {
      Toast.error('You must be logged in to delete tickets');
      return { success: false, error: 'Not authenticated' };
    }

    const allTickets = Storage.get(this.TICKETS_KEY) || [];
    const ticket = allTickets.find(t => t.id === id && t.userId === user.id);

    if (!ticket) {
      Toast.error('Ticket not found');
      return { success: false, error: 'Ticket not found' };
    }

    const updatedTickets = allTickets.filter(t => t.id !== id);
    Storage.set(this.TICKETS_KEY, updatedTickets);

    Toast.success('Ticket deleted successfully!');
    return { success: true };
  },

  /**
   * Get ticket statistics
   * @returns {object} {total, open, inProgress, closed}
   */
  getStats() {
    const tickets = this.getTickets();
    return {
      total: tickets.length,
      open: tickets.filter(t => t.status === 'open').length,
      inProgress: tickets.filter(t => t.status === 'in-progress').length,
      closed: tickets.filter(t => t.status === 'closed').length
    };
  },

  /**
   * Search tickets
   * @param {string} query
   * @returns {array}
   */
  searchTickets(query) {
    if (!query || query.trim() === '') {
      return this.getTickets();
    }

    const searchTerm = query.toLowerCase().trim();
    return this.getTickets().filter(ticket => 
      ticket.title.toLowerCase().includes(searchTerm) ||
      ticket.description.toLowerCase().includes(searchTerm)
    );
  },

  /**
   * Filter tickets
   * @param {object} filters - {status?, priority?}
   * @returns {array}
   */
  filterTickets(filters) {
    let tickets = this.getTickets();

    if (filters.status && filters.status !== 'all') {
      tickets = tickets.filter(t => t.status === filters.status);
    }

    if (filters.priority && filters.priority !== 'all') {
      tickets = tickets.filter(t => t.priority === filters.priority);
    }

    return tickets;
  }
};

