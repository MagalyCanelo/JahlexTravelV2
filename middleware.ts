import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

const isAdminRoute = createRouteMatcher(["/administrador(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req)) {
    const { has } = await auth.protect();

    //redirect to /admin if the user is admin
    if (req.nextUrl.pathname === "/admin") {
      const isAdmin = has({ role: "admin" });
      if (!isAdmin) return new Response("Unauthorized", { status: 401 });
      return Response.redirect(new URL("/admin", req.url));
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
