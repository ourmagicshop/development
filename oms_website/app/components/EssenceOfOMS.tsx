const essenceOfOMSCards = [
    {
        title: "Mission",
        description: "Lorem ipsum dolor sit amet consectetur. Ut ipsum netus congue eget cras rhoncus sagittis volutpat tellus. Turpis dui ante sit varius nunc amet scelerisque aenean.",
    },
    {
        title: "Vision",
        description: "Lorem ipsum dolor sit amet consectetur. Ut ipsum netus congue eget cras rhoncus sagittis volutpat tellus. Turpis dui ante sit varius nunc amet scelerisque aenean.",
    },
    {
        title: "Values",
        description: "Lorem ipsum dolor sit amet consectetur. Ut ipsum netus congue eget cras rhoncus sagittis volutpat tellus. Turpis dui ante sit varius nunc amet scelerisque aenean.",
    },
];

export default function EssenceOfOMS() {
    return (
        <section className="essence-of-oms-section">
            <div className="essence-of-oms-image" role="img" aria-label="Our community" />

            <div className="essence-of-oms-cards">
                {essenceOfOMSCards.map((card) => (
                    <article key={card.title} className="essence-of-oms-card">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
