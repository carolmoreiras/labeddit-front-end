import { Layout } from '../../components/Layout/Layout'
import * as S from './styles'
import { Textfield } from './../../components/Textfield/Textfield'
import { Button } from './../../components/Button/Button'
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const navigate = useNavigate()

  const goToPosts = () => navigate('/posts')

  return (
    <Layout>
      <S.Title>{'Olá, boas vindas ao LabEddit ;)'}</S.Title>

      <S.FormContainer>
        <Textfield type="text" placeholder="Apelido" />
        <Textfield type="email" placeholder="E-mail" />
        <Textfield type="password" placeholder="Senha" />
      </S.FormContainer>

      <S.Policy>
        {'Ao continuar, você concorda com o nosso '}
        <a href=''>{'Contrato de usuário '}</a>
        {'e nossa '}
        <a href="">Política de Privacidade</a>
      </S.Policy>

      <S.CheckboxContainer>
        <input type='checkbox' />
        <label>
          Eu concordo em receber emails sobre coisas legais no Labeddit
        </label>
      </S.CheckboxContainer>

      <Button onClick={goToPosts} fullRadius filled>Cadastrar</Button>
    </Layout >
  )
}