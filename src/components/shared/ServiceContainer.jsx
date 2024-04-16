import { Button } from "@radix-ui/themes";

function ServiceContainer({ title, children, button, onClick }) {
  return (
    <section className=" my-10">
      <div className="flex items-center justify-between">
        <h3 className=" text-2xl font-medium">{title}</h3>
        {button ? (
          <Button variant="outline" onClick={onClick}>
            {button}
          </Button>
        ) : (
          false
        )}
      </div>

      <div className="mt-5">{children}</div>
    </section>
  );
}

export default ServiceContainer;
