import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 236px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/icones/Home-ativo.png"
            iconeInativo="/icones/Home-inativo.png"
            ativo>
            Início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/MaisVistas-ativo.png"
            iconeInativo="/icones/MaisVistas-inativo.png"
            ativo={false}>
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/MaisCurtidas-ativo.png"
            iconeInativo="/icones/MaisCurtidas-inativo.png"
            ativo={false}>
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/Novas-ativo.png"
            iconeInativo="/icones/Novas-inativo.png"
            ativo={false}>
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/Surpreenda_me-ativo.png"
            iconeInativo="/icones/Surpreenda_me-inativo.png"
            ativo={false}>
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
