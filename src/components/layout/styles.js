import media from "styled-media-query";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  width: 100%;
  height: fit-content;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;
