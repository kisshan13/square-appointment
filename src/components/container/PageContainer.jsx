function PageContainer({ children }) {
    return (
        <div className=" max-w-[1450px] mx-auto px-5">
            {children}
        </div>
    );
}

export default PageContainer;