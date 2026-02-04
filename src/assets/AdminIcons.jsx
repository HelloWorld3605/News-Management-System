import React from "react";

export const PlusIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "rgb(139, 111, 71)" }}
    {...props}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

export const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: "black" }}
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const EditIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

export const TrashIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </svg>
);

export const ShieldIcon = ({ className, style, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

export const UsersIcon = ({ className, style, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "20"}
    height={props.height || "20"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const BookOpenIcon = ({ className, style, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    {...props}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const AdminIcon = ({ className, style, ...props }) => (
  <svg
    className={`svg-icon ${className}`}
    style={{
      ...style,
      width: "1.3em",
      height: "1.5em",
      verticalAlign: "middle",
      fill: "currentColor",
      overflow: "hidden",
    }}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M315.392 507.904c-81.92-40.96-137.216-122.88-137.216-221.184 0-135.168 110.592-245.76 245.76-245.76s245.76 110.592 245.76 245.76c0 133.12-104.448 241.664-237.568 245.76h-2.048c-202.752 0-368.64 165.888-368.64 368.64 0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48c0-186.368 124.928-344.064 294.912-393.216z m108.544-16.384c112.64 0 204.8-92.16 204.8-204.8s-92.16-204.8-204.8-204.8-204.8 92.16-204.8 204.8 92.16 204.8 204.8 204.8z m561.152 135.168l4.096 10.24-49.152 59.392c-8.192 10.24-8.192 26.624 0 36.864l49.152 57.344-4.096 10.24c-10.24 28.672-24.576 57.344-45.056 79.872l-8.192 8.192-75.776-12.288c-12.288-2.048-26.624 6.144-30.72 18.432l-26.624 73.728-10.24 2.048c-38.912 8.192-77.824 8.192-116.736 0l-12.288-2.048-24.576-71.68c-4.096-12.288-18.432-20.48-30.72-18.432l-77.824 12.288-8.192-8.192c-10.24-10.24-18.432-22.528-24.576-34.816-8.192-14.336-16.384-30.72-20.48-47.104l-4.096-10.24 51.2-57.344c8.192-10.24 8.192-26.624 0-34.816l-49.152-59.392 4.096-10.24c10.24-30.72 26.624-57.344 47.104-81.92l8.192-8.192 73.728 12.288c12.288 2.048 26.624-6.144 32.768-18.432l26.624-71.68 10.24-2.048c36.864-8.192 75.776-8.192 114.688 0l12.288 2.048 24.576 69.632c4.096 12.288 18.432 22.528 32.768 20.48l75.776-10.24 8.192 8.192c10.24 12.288 18.432 22.528 24.576 36.864 6.144 10.24 12.288 26.624 18.432 40.96z m-57.344-24.576c-4.096-8.192-8.192-14.336-14.336-22.528l-53.248 6.144c-32.768 4.096-65.536-16.384-75.776-47.104L768 491.52c-24.576-4.096-49.152-4.096-73.728 0l-18.432 49.152c-10.24 30.72-45.056 51.2-77.824 45.056l-51.2-8.192c-12.288 14.336-20.48 32.768-28.672 49.152l34.816 40.96c20.48 24.576 20.48 63.488 0 88.064l-34.816 40.96c4.096 10.24 8.192 18.432 14.336 28.672 4.096 8.192 8.192 14.336 14.336 20.48l55.296-8.192c32.768-4.096 65.536 16.384 75.776 47.104l16.384 49.152c24.576 4.096 51.2 4.096 75.776 0l18.432-51.2c10.24-30.72 45.056-51.2 75.776-45.056l51.2 8.192c10.24-14.336 20.48-30.72 26.624-49.152l-32.768-38.912c-20.48-24.576-22.528-63.488-2.048-88.064l34.816-40.96c-4.096-8.192-8.192-16.384-14.336-26.624z m-196.608 204.8c-51.2 0-92.16-40.96-92.16-92.16s40.96-92.16 92.16-92.16 92.16 40.96 92.16 92.16-43.008 92.16-92.16 92.16z m0-40.96c28.672 0 51.2-22.528 51.2-51.2s-22.528-51.2-51.2-51.2-51.2 22.528-51.2 51.2 22.528 51.2 51.2 51.2z" />
  </svg>
);

export const FileTextIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
    style={{ color: "rgb(139, 111, 71)" }}
    {...props}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </svg>
);

export const FolderIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
    style={{ color: "rgb(139, 111, 71)" }}
    {...props}
  >
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  </svg>
);

export const EyeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
    style={{ color: "rgb(139, 111, 71)" }}
    {...props}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </svg>
);
