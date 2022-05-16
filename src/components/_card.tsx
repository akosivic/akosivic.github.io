
export default function Card(props) {
    return (
        <div className="card">
            <div className="hero">
                <code>is-three-quarters-mobile</code><br />
            </div>
            <div className="card-content">

                <div className="media">
                    <div className="media-left">
                        <figure className="image is-1by1">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">About Me</p>
                        <p className="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                </div>
            </div>
        </div>
    )
};