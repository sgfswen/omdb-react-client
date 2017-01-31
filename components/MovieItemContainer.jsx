import React from 'react';

import { Link } from 'react-router';

export default class MovieItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    image() {
        if (!this.props.data.Poster || this.props.data.Poster != 'N/A') {
            return <img src={ this.props.data.Poster } className="img-fluid" alt="" />
        } else {
            return;
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="view overlay hm-white-slight">
                            { this.image() }
                            <Link to={ `/detail/${this.props.data.imdbID}` }>
                                <div className="mask"></div>
                            </Link>
                        </div>

                        <div className="card-block">
                            <h4 className="card-title">{ this.props.data.Title }</h4>
                            <p className="card-text">Released: { this.props.data.Year }, Type: { this.props.data.Type }</p>
                            <div className="read-more">
                                <Link to={ `/detail/${this.props.data.imdbID}` } className='btn btn-primary'>Read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}