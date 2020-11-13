import styled from 'styled-components';

export const HeaderArea = styled.header`
  background-color: #FFF;
  height: 60px;
  border-bottom: 1px solid #CCC;

  .container{
    max-width: 1000px;
    margin: auto;
    display: flex;
  }

  a{
    text-decoration: none;
  }

  .logo{
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .logo-1,
    .logo-2,
    .logo-3{
      font-size: 27px;
      font-weight: bold;
    }

    .logo-1{color: #6E0AD6};
    .logo-2{color: #8CE563};
    .logo-3{color: #F28000};
  }

  nav{
    margin-top: 10px;
    margin-bottom: 10px;

    ul{
      display: flex;
      list-style: none;

      li{
        margin-left: 20px;
        margin-right: 20px;
        
        a{
          color: #242424;
          font-size: 14px;

          &:hover{
            color: #999;
          }

          &.buttom{
            background-color: #F28000;
            padding: 5px 10px;
            border-radius: 8px;
            color: #fff;
          }
          &.buttom:hover{
            background-color: #F99D53;
          }
        }
      }

    }
  }
`;