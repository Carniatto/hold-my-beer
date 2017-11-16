import React, {Component} from 'react';
import './Home.css';
import RestModelService from "../../Services/Rest/rest-model";
import Search from "../../Components/Search/Search";

import {withRouter} from 'react-router-dom';

class Home extends Component {

  constructor (props) {
    super(props);
    this.state = { address: '',  };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  async onSearch() {

    const location = await RestModelService.getLocale(this.state.address);

    const poc = await RestModelService.getPOC(location);

    if (poc.pocSearch.length) {
      this.props.history.push('/products/'+poc.pocSearch[0].id)
    } else {
      this.setState({notFound: true});
    }
    console.log(poc);
  }

  onChange(address) {
    this.setState({ address, notFound: false });
  }

  render() {

    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    };

    return (
      <div className="Home">
        <div className="welcome">
          <div className="welcome-phrase">
            <div className="welcome-title"><span>PARA TODOS</span></div>          
            Acabou a bebida? Sem problemas! É só acessar o Hold my Beer e em apenas
            uma hora sua bebida geladinha vai chegar ai!<br/>
            Chega de terminar a festa mais cedo porque acabou a bebida, com o Hold my Beer
            o seu churrasco não tem mais hora para acabar!
          </div>
        </div>
        {(this.state.notFound)?
          <div className="not-found">
            <h2>Ouch! Não há pontos de venda para esse endereço.</h2>
          </div>
          : ''
        }
        <Search inputProps={inputProps} onSearch={this.onSearch}/>
      </div>
    );
  }
}

export default withRouter(Home);
