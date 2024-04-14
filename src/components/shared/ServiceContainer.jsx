function ServiceContainer({ title, children }) {
    return (
        <section className=" my-10">
            <div>
                <h3 className=" text-2xl font-medium">{title}</h3>
            </div>

            <div className="mt-5">
                {children}
            </div>
        </section>
    );
}

export default ServiceContainer;