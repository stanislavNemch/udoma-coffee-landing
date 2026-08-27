type ArrowRightIconProps = {
  size?: number;
  strokeWidth?: number;
};

export function ArrowRightIcon({
  size = 17,
  strokeWidth = 2.2,
}: ArrowRightIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
