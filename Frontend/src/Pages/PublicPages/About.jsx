import { Search, Star, Film, MessageCircle } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const { setOpenMenu } = useOutletContext();

  const features = [
    {
      icon: Film,
      title: "Explore Movies",
      text: "Browse a collection of movies with detailed information.",
      path: "/movies",
    },
    {
      icon: Search,
      title: "Find Your Movie",
      text: "Search movies easily by title, genre, and other criteria.",
    },
    {
      icon: Star,
      title: "Rate Movies",
      text: "Share your opinion by rating your favorite movies.",
      path: "/movies",
    },
    {
      icon: MessageCircle,
      title: "Write Reviews",
      text: "Join discussions and share your thoughts about films.",
      path: "/movies",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-bold">
          About <span className="text-amber-400">HamroMovie</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          HamroMovie is a movie management platform where users can discover
          movies, search their favorites, rate films, and share reviews.
        </p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="mb-10 text-center text-2xl font-semibold">
          Everything About Movies, In One Place
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                onClick={() => {
                  if (item.title === "Find Your Movie") {
                    setOpenMenu(true);
                  } else {
                    navigate(item.path);
                  }
                }}
                className="
                rounded-xl
                bg-[#192554]
                p-5
                hover:bg-[#232f6d]
                transition
                "
              >
                <Icon className="mb-4 text-amber-400" size={32} />

                <h3 className="font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Roles */}
      <section className="border-t border-slate-800 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">Built For Everyone</h2>

          <p className="mt-4 text-slate-400">
            Administrators manage movie content while users discover, rate, and
            review movies.
          </p>

          <div className="mt-8 flex justify-center gap-5">
            <span className="rounded-full bg-amber-500 px-6 py-2 text-black">
              Admin
            </span>

            <span className="rounded-full bg-blue-500 px-6 py-2">User</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
