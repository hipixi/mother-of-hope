const { Skeleton } = require("@/components/ui/skeleton");

export const HeaderSkeleton = () => (
  <div className="w-full">
    <Skeleton className="h-24 w-full" />
  </div>
);

export const FooterSkeleton = () => (
  <div className="w-full py-8">
    <Skeleton className="h-20 w-full" />
  </div>
);

export const BlogPostsSkeleton = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="space-y-3">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    ))}
  </div>
);
