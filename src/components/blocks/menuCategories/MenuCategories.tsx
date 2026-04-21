type Category = {
  name: string;
  icon: string;
  file: string;
};

type Props = {
  categories: Category[];
};

export const MenuCategories = ({ categories }: Props) => {
  return (
    <>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((cat) => (
          <li className="border-1" key={cat.name} style={{ marginBottom: "1rem" }}>
            <a
              href={cat.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-bold py-3 flex justify-center"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};