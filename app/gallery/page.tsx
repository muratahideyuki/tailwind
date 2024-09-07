import Image from "next/image";
import { getGalleryList } from "@/app/_libs/microcms";
import { GALLERY_LIST_LIMIT } from "@/app/_components/_constants";

export default async function Page() {
  const data = await getGalleryList({ limit: GALLERY_LIST_LIMIT });
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
