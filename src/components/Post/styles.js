import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  background: #FBFBFB;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  padding: 12px;
  min-height: 120px;
`

export const Author = styled.p`
  font-size: 12px;
  color: #6F6F6F;
  margin-bottom: 18px;
`

export const Content = styled.p`
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 18px;
`

export const PostControls = styled.div`
  display: flex;
  gap: 8px;
`

export const ControlContainer = styled.div`
  height: 28px;
  border: 1px solid #ECECEC;
  border-radius: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px;
  gap: 12px;
`