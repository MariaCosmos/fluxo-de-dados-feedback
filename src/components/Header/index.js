import {TitleHeader} from './styled'
import {Usuario} from './styled'
import {Imagem} from './styled'


export const Header = (props) => {

    return(
        <div>
          <TitleHeader>
            Insta4
          </TitleHeader>
          <Usuario>
            <Imagem src={props.foto} alt="Foto de perfil"></Imagem>
            <p>{props.nome}</p>
          </Usuario>
        </div>
    )
}