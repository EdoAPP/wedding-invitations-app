import Letter from "../components/Letter";

import "./WeddingCard.css";

const onlineGuests = {
  "2cf10234-d14f-4207-8681-8d5167fac52e": {
    name: "Marielvys Carrizo y Familia",
  },
  "e7ac8b12-5e71-406c-abc1-fbd49293c95c": {
    name: "Mariennis Carrizo y Andrés Martínez",
  },
  "be91b89a-6388-429e-aa2e-896ed1f2dccd": {
    name: "Marielis Rubio",
  },
  "0d654a3b-2d11-473e-816d-78aede99d271": {
    name: "Mariana Zambrano",
  },
  "7ee14f7a-0a81-4f8c-bca6-0406f008c111": {
    name: "Tiffany Jaouhari",
  },
  "588da1ac-2670-45e7-83c5-d64c69728970": {
    name: "Daniel Cubillán",
  },
  "e3988f2a-ba1f-4508-8633-c0edf1a3a615": {
    name: "Valeria Morales y Abraham Lozano",
  },
  "e43a4de3-8565-45c4-bcaa-1c22a8a440ba": {
    name: "Lorenys Prieto y Familia",
  },
  "dc33e427-ee11-4cd4-a01b-4928f63ce071": {
    name: "Nataly Ramirez",
  },
  "fd5c808f-f915-47f9-bca9-1154f5c3abc8": {
    name: "Juan Diego Molina",
  },
  "f94cf39e-74c9-4fba-83f6-e0e3c5b5df34": {
    name: "Yulitza Morales y Carlos",
  },
  "3bedc027-89e5-45ed-8144-cbda075ba51a": {
    name: "Jose Daniel Rubio",
  },
  "b2007523-7450-473b-af46-2d266370e283": {
    name: "Abuela Betty",
  },
};

const onSiteGuests = {
  "7c3c2ed5-a036-4792-ad35-dc6ebcc68e1f": {
    name: "Nilibeth Sánchez & Jose Huerta",
    pass: 2,
  },
  "d96ea822-a82e-40ea-be0b-154c1b5c2fca": {
    name: "Henry Sánchez & Marilyn Rubio",
    pass: 2,
  },
  "a1d89907-6c14-4ff6-aac9-a077dd9fbac9": {
    name: "Maybelis Rubio & Gerardo Nieto",
    pass: 2,
  },
  "8bb48907-4a11-4e62-9b40-6308a536a613": { name: "Evely Rubio", pass: 1 },
  "619e442e-50b0-4ba5-ad38-b8467bb265f8": {
    name: "Maria Rubio & Maria Fuenmayor",
    pass: 2,
  },
  "74a56b89-4e2d-4023-a3dc-4153b6c1dfaf": {
    name: "Marwin Rubio & Gexibeth C.",
    pass: 2,
  },
  "db7edfb0-aa9a-436b-88a8-4fb63d50b92e": {
    name: "Jacquelin Sánchez",
    pass: 1,
  },
  "104b8747-bf2c-44a8-882b-969e5419e980": {
    name: "Janeth Sánchez & Antonio Molero",
    pass: 2,
  },
  "436b4d9a-cd74-4537-b5fc-8e3d66796066": {
    name: "Jhon Sánchez",
    pass: 2,
  },
  "fdccf981-69e4-4aa5-b8c8-a721a1e76d19": {
    name: "Yanely Prieto",
    pass: 1,
  },
  "fdccf981-69e4-4aa5-b8c8-a721a1e76er9": {
    name: "Fernando Urrutia",
    pass: 1,
  },
  "fdccf981-69e4-4aa5-b8c8-a721a17re6er9": {
    name: "Alberto Gonzalez",
    pass: 2,
  },
  "a84c520b-4948-4f08-871a-a103621c45ac": {
    name: "Edgar Pacheco & Familia",
    pass: 4,
  },
  "74cc5558-cb25-4a5e-8f03-797ab9b61b91": {
    name: "Angel Prieto & Marlene Pirela",
    pass: 2,
  },
  "3eae1799-c106-47d7-809d-8b069274b5ab": {
    name: "Adrián Prieto & Maria Hidalgo",
    pass: 2,
  },
  "37a5258b-cfd0-4466-8646-6dba6e08f0f9": {
    name: "Adriana Prieto & Eduardo Saman",
    pass: 2,
  },
  "4528e507-f8ad-4f65-8ad4-bd18c0f9ac80": {
    name: "Handry & Beatriz Prieto",
    pass: 2,
  },
  "57e58217-3194-4b93-80c8-a3430a2540e7": {
    name: "Jose Luis Contreras",
    pass: 1,
  },
  "be14afa5-f5e8-4a1e-a461-e37172459d7c": {
    name: "Miguel Bracho & Angélica Martínez",
    pass: 2,
  },
  "6c6effee-c65e-4da2-b6e4-0ecac0f6170b": {
    name: "Sebastián Pedraja & Melissa Romero",
    pass: 2,
  },
  "b7233c36-7e5f-4db8-a0fe-d52ac95a1dde": {
    name: "Andrés Salamanca & Valeria Perez",
    pass: 2,
  },
  "94737863-157a-4bd5-a0f5-08cff4cede71": {
    name: "Wilfredo Parra & Anyelyn Garcia",
    pass: 2,
  },
  "be70e743-091d-43ee-bd11-63dc38e795bc": {
    name: "Francisco Barrios & Wendy Flores",
    pass: 2,
  },
  "34647ae2-13f5-4be2-982f-5b4f63a23469": {
    name: "Georgina Deftereos",
    pass: 2,
  },
  "6f09e112-af37-44d0-b39e-4dc9108f1379": {
    name: "Tarjeta de muestra",
    pass: 1,
  },
};

const WeddingCard = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const guestId = urlParams.get("guest");

  const onSiteGuest = guestId && onSiteGuests[guestId];
  const onlineGuest = guestId && onlineGuests[guestId];

  let letterType = "online";
  if (onSiteGuest) letterType = "onsite";

  if (!onSiteGuest && !onlineGuest) {
    return <div className="container">Invitación inválida</div>;
  }

  return (
    <div className="container">
      <Letter
        guest={onSiteGuest ? onSiteGuest : onlineGuest}
        letterType={letterType}
      />
    </div>
  );
};

export default WeddingCard;
