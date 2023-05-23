import { getSession } from 'next-auth/react';

export default function SignUp(props: any) {
  console.log(props.session);
  return <div>Signup</div>;
}
export async function getServerSideProps(ctx: any) {
  //Verificação de autorização de acesso e redirecionamento de página
  const session = await getSession(ctx);
  if (session) {
    const { user } = session;

    if (user) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      };
    }
  }
}
