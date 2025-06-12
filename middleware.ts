import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/administrador(.*)","/micuenta(.*)","/compras(.*)","/resenas(.*)"]);

export default clerkMiddleware(async (auth, req) => {
/*   if (isProtectedRoute(req)) {
    const { sessionClaims } = await auth.protect();

    if (req.nextUrl.pathname.startsWith("/administrador")) {
      // Check custom role from metadata instead of organization role
      const userRole = sessionClaims?.metadata?.role;

      if (userRole !== "admin") {
        return NextResponse.redirect(new URL("/noadmitido", req.url));
      }
    }
  } */
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
