// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const acceptCookieValue = "6Fc4TjVfq6uUUKSa7KHnZEUrWPvDTq8JZHWhr48xYQTFPMhPCyyvvTPdCBXj9n28ntrniwQKeVPnYs4n";

// This function can be marked `async` if using `await` inside
// Reference https://zenn.dev/kiriyama/articles/b0d6f8b2362107
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/sample')) {
    console.log('hello! ' + request.nextUrl.pathname);
    console.log(JSON.stringify(request.cookies.get('hogehoge')));
    const cookieJsonObj = request.cookies.get('hogehoge');
    if(!cookieJsonObj){
      console.warn('Nothing..!');
      return NextResponse.redirect(new URL('/redirect', request.url))
    }

    const cookieValue = cookieJsonObj['value'];
    if(cookieValue === acceptCookieValue){
      console.log('Good!');
      return NextResponse.next();
    } else {
      console.warn('Nooo..!');
      return NextResponse.redirect(new URL('/redirect', request.url))
    }
  }
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }