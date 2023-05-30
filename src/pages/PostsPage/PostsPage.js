import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button/Button"
import { Divider } from "../../components/Divider/Divider"
import { Layout } from "../../components/Layout/Layout"
import { Post } from "../../components/Post/Post"
import * as S from './styles'


export const PostsPage = () => {
const navigate = useNavigate()

  const posts = [
    {
      id: 1,
      author: "Carol",
      content: 'lblablablbalabl',
      commentsAmount: 12,
      votes: 55
    },
    {
      id: 2,
      author: "Carol",
      content: 'lblablablbalabl',
      commentsAmount: 12,
      votes: 55
    },
    {
      id: 3,
      author: "Carol",
      content: 'lblablablbalabl',
      commentsAmount: 12,
      votes: 55
    },
  ]

  const gotoComments = (postId) => navigate(`/posts/${postId}`)

  return (
    <Layout> 
      <S.TextArea name="Text1" rows="5" placeholder="Escreva seu post..."/>
      
      <Button filled>Postar</Button>
      
      <Divider/>
      
      <S.PostsContainer>
        {posts.map(post => (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            commentsAmount={post.commentsAmount}
            onClickDown={() => console.log('Não gostei! hum!', post)}
            onClickUp={() => console.log('gostei!', post)}
            votes={post.votes}
            onClickComments={() => gotoComments(post.id)}
          />
        ))}
      </S.PostsContainer>
    </Layout>
  )

}