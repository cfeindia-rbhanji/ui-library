/**
 * Component to display as a fallback when no data is present.
 */
function EmptySection() {
  return (
    <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/3 text-center">
      <img className="mx-auto" src="/no-activity.svg" />
      <div className="py-8">
        <p className="text-small font-large mb-2 leading-5">
          No actions to display at the moment
        </p>
        <p className="flex justify-center text-12 text-muted-foreground">
          Activities from you and your team members will show up here.
        </p>
      </div>
    </div>
  );
}

export default EmptySection;
