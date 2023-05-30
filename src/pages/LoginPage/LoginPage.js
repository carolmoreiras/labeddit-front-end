import LogoLbn from '../../images/Group 1.png'
import { useNavigate } from "react-router-dom";
import * as S from './styles'
import { Textfield } from '../../components/Textfield/Textfield';
import { Layout } from '../../components/Layout/Layout';
import { Button } from '../../components/Button/Button';
import { Divider } from '../../components/Divider/Divider';

export const LoginPage = () => {
  const navigate = useNavigate()

  const goToPosts = () => navigate("/posts")

  const goToSignUp = () => navigate("/cadastrar")

    return (
      <Layout>
        <S.LogoContainer>
          <img src={LogoLbn} />
          <p>O projeto de rede social da Labenu.</p>
        </S.LogoContainer>

        <S.FormContainer>
          <Textfield type="email" placeholder="E-mail" />
          <Textfield type="password" placeholder="Senha" /> 
        </S.FormContainer>

        <S.ButtonsContainer>
          <Button filled fullRadius onClick={goToPosts}>Continuar</Button>
          <Divider/>
          <Button fullRadius onClick={goToSignUp}>Crie uma conta!</Button>
        </S.ButtonsContainer>

      </Layout>
    )
  }