## Choosing Auto-incrementing Integer ID or UUID for relational database

In practice, many systems use int IDs for primary keys and UUIDs for external identifiers.

This is because auto-incrementing integer IDs are efficient in terms of storage, searching and indexing.
Whereas UUID provides a high probability of uniqueness across different systems, databases, and even globally.

So in practice, database layer use integer primary keys `id` for internal references, relationships, and indexing.
And application layer generate UUIDs for entities that are exposed to external clients.
This layer of abstraction allows internal database operations to remain efficient while providing the benefits of UUIDs in terms of security and global uniqueness.
