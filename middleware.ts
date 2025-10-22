import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Tenta obter o cookie de autenticação da requisição.
  const authToken = request.cookies.get('auth-token')?.value;

  // 2. Se o usuário está tentando acessar qualquer rota que comece com /admin...
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // 3. ...e ele não tem o token, ou o token é inválido...
    if (!authToken || authToken !== 'super-secret-token') {
      // 4. ...redirecione-o para a página de login.
      // A URL completa é construída para um redirecionamento correto.
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 5. Se tudo estiver ok, a requisição pode continuar para a página solicitada.
  return NextResponse.next();
}

// O 'matcher' é uma configuração de otimização.
// Ele garante que o middleware só será executado nas rotas que você especificar,
// economizando recursos em outras rotas.
export const config = {
  matcher: ['/admin/:path*'],
};
