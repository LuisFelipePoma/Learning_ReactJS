import './App.css'
import { TwitterFollowCard } from './Components/TwitterFollowCard';

const users = [
	{
		userName: 'luisfelipepoma',
		name: 'Luis Felipe Poma',
		isFollowing: true
	},
	{
		userName: 'pheralb',
		name: 'Pablo H.',
		isFollowing: false
	},
	{
		userName: 'PacoHdezs',
		name: 'Paco Hdez',
		isFollowing: true
	}
]
export default function App() {

	return (
		<section className='App'>
			{
				users.map(({ userName, name, isFollowing }) => (
					<TwitterFollowCard
						key={userName}
						userName={userName}
						initialIsFollowing={isFollowing}
					>
						{name}
					</TwitterFollowCard>
				))
			}
		</section>
	);
}
