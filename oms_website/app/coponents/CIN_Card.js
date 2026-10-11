import DiscordAPI_call from '../utils/discord';

export default function Card(props) {
  let icon_path = props.icon_path;
  let head = props.head;
  let text = props.text;
  let discord_data = DiscordAPI_call().then(data => {
      return data.profile;
    });;

  
  if (head == 'Globe') {
    head = DiscordAPI_call().then(data => {
      return data.profile.member_count;
    });
  }

  return (
    <div className="h-[200px] bg-white rounded-xl p-6 border-solid border-2 border-zinc-200 shadow-[0px_1px_12px_3px_rgba(53,_39,_101,_0.1)]">
      <img className="pb-1" src={icon_path} alt="fireSpot" height="20px" width="20px"/>
      <h2 className="text-purple text-2xl font-semibold">{head}</h2>
      <p className="text-lg text-zinc-500">{text}</p>
    </div>
  )
}