import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="#" className="icon alt fab fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon alt fab fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon alt fab fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon alt fab fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="#" className="icon alt fa fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Panigo</li><li>Powered by Gatsby with ❤</li>
                </ul>
            </section>
        )
    }
}

export default Footer