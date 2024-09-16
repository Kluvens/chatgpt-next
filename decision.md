### Question: How can I effectively reflect modifications to a long list of items on the frontend?

**Answer:**  
Typically, you might make an initial **GET** request to retrieve all items, then a **POST** request to add a new item, and another **GET** request to reflect the changes. This process, however, can be time-consuming due to the multiple network requests involved.

An efficient approach is to maintain a local cache or state on the frontend that holds the current list of items. When a new item is created using a **POST** request, you can directly update this local cache or state, rather than making an additional **GET** request to fetch the updated list. This method is known as **optimistic updating** or **client-side caching**.

### Question: How can I achieve client-side caching?

**Answer:**  
There are several options for client-side caching:

1. **localStorage:**

   - Size: Approximately **5MB**.
   - Data persists across sessions and page reloads.
   - Best for small-scale data caching that doesn't need to be frequently updated.

2. **sessionStorage:**

   - Similar to `localStorage`, with a size limit of around **5MB**.
   - Data is only available within the current tab/session and is cleared when the tab is closed.
   - Suitable for temporary storage within a single session.

3. **Cloud Storage (e.g., Vercel KV):**

   - Can handle large amounts of data and provide real-time updates.
   - Useful for shared data across devices and users.
   - May incur costs and use network resources for each update, making it potentially expensive for large-scale projects.

4. **IndexedDB:**
   - Does not have a strict size limit and is typically constrained only by the user's available disk space.
   - Suitable for complex and large-scale applications that need to store structured data.
   - Offers a more sophisticated way to store data, including large amounts of binary data like images or videos.

### Question: UUID as a database primary key can make performance down, are there any alternatives

**Answer:**
There is no one-size-fits-all solution, and the best choice depends on your specific use case:

- For **general use**, **NanoID** provides a great balance between uniqueness, performance, and readability.
- For **distributed systems** with high insert rates, **Snowflake IDs** or **KSUID** can be more appropriate.
- For **sequential inserts** with good database performance, **CUID** or **ULID** are excellent choices.
- For **simplicity and performance** in a single-node environment, **database-generated IDs** can be the way to go.

### Question: Using a cloud key-value (KV) database versus IndexedDB

**Answer:**

- IndexedDB is a client-side, NoSQL database built into modern browsers, designed for storing significant amounts of structured data within a user's browser.
- Cloud KV databases (e.g., AWS DynamoDB, Redis, Vercel KV) are managed services provided by cloud platforms, offering scalable, distributed storage accessible from anywhere over the internet.
- IndexedDB is more client-side storage, limited by device, no native sync, client-side persistence.
- Cloud KV Database is more server-side storage, low latency at scale, unlimited storage, multi-user access, global persistence and real-time sync.

### Talk about request parameters, request body, headers, and query strings

**Answer**

1. Request Parameters

- Definition: Request parameters are part of the URL path and are used to identify specific resources.
- Example: `GET /users/:userId/posts`
- Common use cases: either fetch a specific resource by ID, or perform operations on a specific resource

2. Query Strings

- Definition: Query strings are appended to the end of a URL and are used to send optional data to the server.
- Example: `GET /products?category=electronics&sort=price&order=asc`
- Common use cases: They are typically used for filtering, sorting, searching, and pagination.

3. Request Body

- Definition: The request body is used to send data to the server in the body of the HTTP request.
- Example: `
  {
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword"
}`
- Common use cases: Creating new resources or updating existing resources

4. Request Headers

- Definition: Headers are key-value pairs sent as part of the HTTP request or response. They provide metadata about the request or response, such as content type, authentication tokens, and more.
- Example:
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`
  - `Accept: application/json`
- Use cases: content negotiation, authentication and authorization, and controlling cache.
