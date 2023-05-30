import * as S from './styles'
import Logolbn from '../../images/Group 3.png'
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {

  const location = useLocation()

  const navigate = useNavigate()

  const goToLogin = () => {
    navigate("/")
  }

  return (
    <S.HeaderContainer>
      <img src={Logolbn} />

      <S.ButtonHeader onClick={goToLogin}>
        {location.pathname === "/cadastrar" ? 'Entrar' : 'Logout'}
      </S.ButtonHeader>
    </S.HeaderContainer>
  )
}