import "./Incom.css";
import EmailProfile from "../../assets/email.jpg";

const Incom = () => {
  const mailIncom = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1394637422/photo/confident-handsome-30s-caucasian-millennial-man-businessman.jpg?s=612x612&w=0&k=20&c=yAaiBJ7NNX1dC2XE-HZecZkUF62f-J-ypKiIT_xn7eA=",
      name: "Michael Turner",
      desc: "Receipt Detected",
      type: "receipt",
      status: false,
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1306096385/photo/male-portrait.jpg?s=612x612&w=0&k=20&c=A1s7y-RG4huk0o9UOWcseMhvSI8GmO6vnfXJtGsA1VY=",
      name: "Brightlane Inc",
      desc: "Invoice Detected",
      type: "invoice",
      status: false,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
      name: "Northbay Services",
      desc: "Receipt Detected",
      type: "receipt",
      status: true,
    },
    {
      id: 4,
      img: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
      name: "Jason Miller",
      desc: "Invoice Detected",
      type: "invoice",
      status: true,
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
      name: "Emily Picker",
      desc: "Receipt Detected",
      type: "receipt",
      status: true,
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      name: "Office Supply",
      desc: "Invoice Detected",
      type: "invoice",
      status: true,
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      name: "Daneil Brown",
      desc: "Invoice Detected",
      type: "invoice",
      status: true,
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      name: "Anna",
      desc: "Receipt Detected",
      type: "receipt",
      status: true,
    },
    {
      id: 9,
      img: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
      name: "Olivia",
      desc: "Receipt Detected",
      type: "receipt",
      status: true,
    },
  ];
  const unreadEmail = mailIncom.filter((item) => {
    return !item.status;
  });
  const readedEmail = mailIncom.filter((item) => {
    return item.status;
  });

  return (
    <div className="incom-container">
      <div className="email-frofile">
        <img src={EmailProfile} alt="Email" />
        <div className="email-name">
          <p className="owner-name">Somphors</p>
          <p className="email-notification">2 unread mals</p>
        </div>
      </div>

      <div className="mesages">
        <p className="message-title">New</p>
        <div className="mail-item">
          {unreadEmail.map((item) => {
            return (
              <div className="mail" key={item.id}>
                <div className="profile-mail">
                  <div className="image">
                    <img src={item.img} width="50px" />
                  </div>
                  <span>{item.name}</span>
                </div>
                <div
                  className={
                    item.type == "invoice" ? "mailType-invoice" : "mailType"
                  }
                >
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>

        <p className="message-title">Old</p>

        <div className="mail-item">
          {readedEmail.map((item) => {
            return (
              <div className="mail" key={item.id}>
                <div className="profile-mail">
                  <div className="image">
                    <img src={item.img} width="50px" />
                  </div>
                  <span>{item.name}</span>
                </div>
                <div
                  className={
                    item.type == "invoice" ? "mailType-invoice" : "mailType"
                  }
                >
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Incom;
