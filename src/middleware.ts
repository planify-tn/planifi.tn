import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./../i18n.config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the request is for static files or API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("/favicon.ico") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already includes a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Determine preferred locale
  const locale = getPreferredLocale(request);

  // Create new URL with locale
  const newUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}`,
    request.url
  );

  return NextResponse.redirect(newUrl);
}

function getPreferredLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";

  // Parse accepted languages
  const acceptedLanguages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().toLowerCase());
  const lang = acceptedLanguages[0];
  //   for (const lang of acceptedLanguages) {
  if (i18n.locales.includes(lang as any)) return lang;

  const languageCode = lang.split("-")[0];
  if (i18n.locales.includes(languageCode as any)) return languageCode;
  //   }

  return i18n.defaultLocale;
}

// Set up matcher to explicitly exclude static files and API routes
export const config = {
  matcher: [
    // Exclude specific paths and file extensions
    "/((?!api|_next|favicon\\.ico).*)",
    "/((?!.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|js|css)$).*)",
  ],
};
