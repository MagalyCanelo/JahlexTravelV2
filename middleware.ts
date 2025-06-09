import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

const isAdminRoute = createRouteMatcher([
  "/administrador",
  "/administrador/(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req)) {
    const { has } = await auth.protect();

    // redirect to /administrador if the user is admin
    if (req.nextUrl.pathname === "/administrador" || req.nextUrl.pathname.startsWith("/administrador/")) {
      const isAdmin = has({ role: "admin" });
      if (!isAdmin) return new NextResponse("Unauthorized", { status: 401 });
      return NextResponse.redirect(new URL("/administrador", req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
