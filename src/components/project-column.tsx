type Props = {
  title: string;
  summary: string;
  icon?: React.ReactNode;
};

function ProjectColumn({ title, summary, icon }: Props) {
  return (
    <div>
      <div className="flex">
        <div className="flex-shrink-0 mt-2">
          <div className="flex items-center justify-center text-gray-500">
            {icon}
          </div>
        </div>
        <div className="ml-4">
          <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
            {title}
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectColumn;
