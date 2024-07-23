// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get("currentUser")?.value;
//   const { pathname } = request.nextUrl;

//   // Check if the path is /chat/[chatId]
//   const chatIdMatch = pathname.match(/^\/chat\/(\w+)$/);

//   if (chatIdMatch) {
//     const chatId = chatIdMatch[1];

//     // If currentUser is not the chatId, redirect to /chat
//     if (currentUser !== chatId) {
//       return NextResponse.redirect(new URL("/chat", request.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/chat/:path*"],
// };
