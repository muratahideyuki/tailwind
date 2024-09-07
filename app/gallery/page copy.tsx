import Image from "next/image";
import { getMemberList } from "@/app/_libs/microcms";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/aa.jpg",
        width: 200,
        height: 200,
      },
      name: "だびっと",
      position: "ceo",
      profile:
        "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    },
  ],
};
export default function Page() {
  return (
    <div>
      {data.contents.length === 0 ? (
        <p>絵がないです</p>
      ) : (
        <ul>
          {data.contents.map((gallery) => (
            <li key={gallery.id}>
              <Image
                src={gallery.image.url}
                alt=""
                width={gallery.image.width}
                height={gallery.image.height}
              />
              <dl>
                <dt>{gallery.name}</dt>
                <dd>{gallery.position}</dd>
                <dd>{gallery.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
