import Image from 'next/image';

export function SocialProof() {
const clients = [
    {
      name: 'Netflix',
      logo: '../netflix.svg', // Path relative to public folder
    },
    {
      name: 'HULU',
      logo: '../hulu.svg',
    },
    {
      name: 'Google',
      logo: '../google1.svg',
    },
    {
      name: 'Spotify',
      logo: '../spotify.svg',
    },
     {
      name: 'Facebook',
      logo: '../facebook.svg',
    },
  ];

  return (
    <section className="py-16 bg-muted/30 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-slate-600 dark:text-slate-400 uppercase tracking-wider text-sm mb-8">
            Our Network
          </p>
        </div>
        
       <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group flex justify-center items-center h-12 md:h-16 w-full relative"
            >
              <Image 
                src={client.logo} 
                alt={`${client.name} logo`} 
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
