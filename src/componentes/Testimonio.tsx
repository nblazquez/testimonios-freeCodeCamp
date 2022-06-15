import { builtinModules } from 'module';
import React from 'react';
import styled from 'styled-components';

const StyledTestimonio = styled.div`
  .contenedor-testimonio{
    width: 1170px;
    height: 368px;
    margin: 10px 10px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 3px 13px 1px rgb(0 0 0 /9%);
  }
  .imagen-testimonio{
    height: 100%;
    width: auto;
  }
  .contenedor-texto-testimonio{
    text-align: center;
    padding: 40px;
    font-family: sans-serif;
    line-height: 1.5rem;
    font-weight: 400;
  }
  .nombre-testimonio, .cargo-testimonio{
    font-size: 1.3rem;
  }
  .cargo-testimonio{
    margin-top: 15px;
    padding-bottom: 30px;
  }
  .texto-testimonio{
    font-size: 1.1rem;
    text-align: justify;
  }
`;

const Testimonio = (props:any) => {
  return (
    <StyledTestimonio>
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio' 
          src={require(`../imagenes/testimonio-${props.imagen}.png`)} 
          alt={`Foto de ${props.nombre.split(" ")[0]}`} />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
      </div>
    </StyledTestimonio>
  );
}

Testimonio.Styled = StyledTestimonio;

export default Testimonio;
