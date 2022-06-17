import styled from 'styled-components'

export const LogoMain = styled.div`
  font-size: calc(var(--fs-logo) * 1.4);
  line-height: 1;
  white-space: pre-wrap;
  font-family: var(--ff-title);
  /* transform: translate3d(0, calc(var(--ff-title-offset) * var(--offset)), 0); */
  text-align: center;
  color: var(--txt);
  background: var(--bg);
  margin-bottom: 0.6em;
`

export const LogoRestaurant = styled.div`
  font-size: clamp(calc(var(--fs-logo) * 4.2), calc(var(--fs-logo) * 4.8), 32vw);
  line-height: 1;
  text-transform: uppercase;
  white-space: pre-wrap;
  font-family: var(--ff-name);
  /* transform: translate3d(0, calc(var(--ff-body-offset) * var(--offset)), 0); */
  text-align: center;
  /* margin-top: 0.25em; */
  margin-bottom: -0.1em;
  color: var(--txt);
  background: var(--bg);
  /* .nord & {
    font-size: 37vw;
  }
  .sued & {
    font-size: 40vw;
  } */
`

export const LogoArea = styled.div`
  font-size: var(--fs-logo);
  line-height: 1;
  text-align: center;
  color: var(--txt);
  background: var(--bg);
  font-family: var(--ff-body);
  transform: translateY(calc(var(--ff-body-offset) * var(--offset)));
  white-space: pre-wrap;
`