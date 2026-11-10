
const values = [
    {
        title: "Positivity",
        description: "Lorem ipsum dolor sit amet consectetur. Ut ipsum netus congue eget cras rhoncus sagittis volutpat tellus. Turpis dui ante sit varius nunc amet scelerisque aenean.",
    },
    {
        title: "Respect",
        description: "Lorem ipsum dolor sit amet consectetur. Ut ipsum netus congue eget cras rhoncus sagittis volutpat tellus. Turpis dui ante sit varius nunc amet scelerisque aenean.",
    },
    {
        title: "Connections",
        description: "Lorem ipsum dolor sit amet consectetur. Ut ipsum netus congue eget cras rhoncus sagittis volutpat tellus. Turpis dui ante sit varius nunc amet scelerisque aenean.",
    },
];

export default function WhatIsOMS() {
    return (
        <section className="what-is-oms-section">
            <div className="what-is-oms-content">
                <h2>What is OMS?</h2>

                <p className="what-is-oms-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Viverra nulla.
                </p>

                <a href="/about" className="meet-team-button">
                    Get to know our story and team
                </a>

                <div className="values-grid">
                    {values.map((value) => (
                        <article className="value-card" key={value.title}>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
