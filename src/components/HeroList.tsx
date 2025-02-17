import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Item } from "@/constants/type";


const notifications:Item[] = [
  {
    name: "New Arrival!",
    description: "Limited edition anime streetwear just dropped!",
    time: "5m ago",
    icon: "🛍️",
    color: "#FF5733",
  },
  {
    name: "Exclusive Offer",
    description: "Get 20% off on your first anime collection purchase.",
    time: "10m ago",
    icon: "🎉",
    color: "#FFC300",
  },
  {
    name: "Bestseller Alert",
    description: "Our top-selling anime hoodie is almost out of stock!",
    time: "15m ago",
    icon: "🔥",
    color: "#C70039",
  },
  {
    name: "New Anime Drop",
    description: "Fresh designs inspired by the latest anime hits!",
    time: "20m ago",
    icon: "🎨",
    color: "#900C3F",
  },
  {
    name: "Free Shipping",
    description: "Enjoy free worldwide shipping for a limited time!",
    time: "30m ago",
    icon: "🚚",
    color: "#28A745",
  },
];

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
              "transition-all duration-200 ease-in-out hover:scale-[103%]",
              "bg-white shadow-md dark:bg-gray-900 dark:shadow-lg"
            )}
          >
            <div className="flex flex-row items-center gap-3">
              <div
                className="flex size-10 items-center justify-center rounded-2xl"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-lg">{item.icon}</span>
              </div>
              <div className="flex flex-col overflow-hidden">
                <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-gray-900 dark:text-white">
                  <span className="text-sm sm:text-lg">{item.name}</span>
                  <span className="mx-1">·</span>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </figcaption>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </figure>
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-0 bottom-0 h-full"></div>
    </div>
  );
}
