import { Button } from "../../components/Button/Button"
import { Divider } from "../../components/Divider/Divider"
import { Layout } from "../../components/Layout/Layout"
import { Post } from "../../components/Post/Post"
import * as S from './styles'


export const CommentsPage = () => {
  const comments = [
    {
      id: 1,
      author: "Carol",
      content: 'lblablablbalabl',
      votes: 55
    },
    {
      id: 2,
      author: "Carol",
      content: 'lblablablbalabl',
      votes: 55
    },
    {
      id: 3,
      author: "Carol",
      content: 'lblablablbalabl',
      votes: 55
    },
  ]

  return (
    <Layout> 
      <Post
        author={'Ciclano'}
        content={'post aleatório'}
        votes={33}
        onClickDown={() => console.log('Não gostei! hum!')}
        onClickUp={() => console.log('gostei!')}
        commentsAmount={5}
      />

      <S.TextArea name="Text1" rows="5" placeholder="Escreva seu comentário..."/>
      
      <Button filled>Comentar</Button>
      
      <Divider/>
      
      <S.PostsContainer>
        {comments.map(comment => (
          <Post
            key={comment.id}
            author={comment.author}
            content={comment.content}
            onClickDown={() => console.log('Não gostei! hum!', comment)}
            onClickUp={() => console.log('gostei!', comment)}
            votes={comment.votes}
            isComment
          />
        ))}
      </S.PostsContainer>
    </Layout>
  )

}