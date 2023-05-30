import * as S from "./styles"
import { ArrowUp }from "../icons/ArrowUp";
import { ArrowDown } from "../icons/ArrowDown";
import { CommentIcon } from './../icons/CommentIcon';

export const Post = ({
  author,
  content,
  votes,
  onClickUp,
  onClickDown,
  onClickComments,
  commentsAmount,
  isComment = false
}) => {
  return(
    <S.PostContainer>
      <S.Author>Enviado por: {author}</S.Author>

      <S.Content>{content}</S.Content>

      <S.PostControls>
        <S.ControlContainer>
          <div onClick={onClickUp}><ArrowUp/></div>
           
          <div>{votes}</div>
          
          <div onClick={onClickDown}><ArrowDown/></div>
        </S.ControlContainer>
        
        {!isComment && (
          <S.ControlContainer onClick={onClickComments}>
            <CommentIcon/> 
            {commentsAmount}
          </S.ControlContainer>
        )}
      </S.PostControls>
    </S.PostContainer>
  )
}