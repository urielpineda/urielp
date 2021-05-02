import React, { FC, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLAnchorElement>;

export const Logo: FC<Props> = ({ className }: Props) => {
  return (
<svg
  xmlns="http://www.w3.org/2000/svg"
      className={className}
      color="red"
      fill="none"
      viewBox="0 0 107 31"
    >
   <path d="M 14.066 13.494 L 14.066 6.24 A 0.734 0.734 0 0 1 14.098 6.017 A 0.598 0.598 0 0 1 14.248 5.772 Q 14.43 5.59 14.716 5.59 L 17.966 5.59 A 0.742 0.742 0 0 1 18.222 5.633 A 0.658 0.658 0 0 1 18.447 5.772 A 0.604 0.604 0 0 1 18.641 6.205 A 0.811 0.811 0 0 1 18.642 6.24 L 18.642 13.338 A 4.179 4.179 0 0 0 18.743 14.3 Q 19.051 15.598 20.303 15.834 A 3.254 3.254 0 0 0 20.904 15.886 A 2.773 2.773 0 0 0 21.657 15.789 A 2.07 2.07 0 0 0 22.607 15.223 A 2.155 2.155 0 0 0 23.118 14.315 Q 23.244 13.882 23.244 13.338 L 23.244 6.24 A 0.734 0.734 0 0 1 23.276 6.017 A 0.598 0.598 0 0 1 23.426 5.772 Q 23.608 5.59 23.894 5.59 L 27.144 5.59 A 0.734 0.734 0 0 1 27.367 5.622 A 0.598 0.598 0 0 1 27.612 5.772 Q 27.794 5.954 27.794 6.24 L 27.794 18.46 Q 27.794 18.72 27.612 18.915 A 0.604 0.604 0 0 1 27.179 19.109 A 0.811 0.811 0 0 1 27.144 19.11 L 24.128 19.11 Q 23.868 19.11 23.673 18.915 Q 23.478 18.72 23.478 18.46 L 23.478 17.472 Q 22.802 18.408 21.723 18.889 A 5.332 5.332 0 0 1 20.465 19.264 Q 19.858 19.37 19.162 19.37 Q 17.68 19.37 16.523 18.694 A 4.487 4.487 0 0 1 14.909 17.062 A 5.552 5.552 0 0 1 14.716 16.705 A 5.924 5.924 0 0 1 14.229 15.246 Q 14.096 14.594 14.072 13.845 A 10.615 10.615 0 0 1 14.066 13.494 Z M 76.804 24.05 L 73.632 24.05 A 0.685 0.685 0 0 1 73.402 24.013 A 0.593 0.593 0 0 1 73.164 23.855 Q 72.982 23.66 72.982 23.4 L 72.982 6.24 A 0.734 0.734 0 0 1 73.014 6.017 A 0.598 0.598 0 0 1 73.164 5.772 Q 73.346 5.59 73.632 5.59 L 76.57 5.59 Q 76.83 5.59 77.025 5.772 A 0.604 0.604 0 0 1 77.219 6.205 A 0.811 0.811 0 0 1 77.22 6.24 L 77.22 7.176 Q 77.844 6.396 78.832 5.863 Q 79.762 5.361 81.083 5.332 A 7.467 7.467 0 0 1 81.25 5.33 A 7.119 7.119 0 0 1 82.4 5.419 A 5.249 5.249 0 0 1 83.538 5.733 Q 84.526 6.136 85.241 6.916 Q 85.956 7.696 86.346 8.814 A 7.573 7.573 0 0 1 86.665 10.097 A 10.383 10.383 0 0 1 86.788 11.388 Q 86.814 11.908 86.814 12.35 Q 86.814 12.792 86.788 13.312 A 9.763 9.763 0 0 1 86.641 14.703 A 7.536 7.536 0 0 1 86.346 15.834 A 5.982 5.982 0 0 1 85.791 17.014 A 5.004 5.004 0 0 1 85.254 17.732 Q 84.552 18.512 83.551 18.941 A 5.204 5.204 0 0 1 82.257 19.299 A 6.882 6.882 0 0 1 81.25 19.37 A 6.025 6.025 0 0 1 80.145 19.273 A 4.468 4.468 0 0 1 79.027 18.915 Q 78.078 18.46 77.454 17.628 L 77.454 23.4 Q 77.454 23.66 77.272 23.855 A 0.604 0.604 0 0 1 76.839 24.049 A 0.811 0.811 0 0 1 76.804 24.05 Z M 63.102 12.272 L 63.102 12.896 A 0.734 0.734 0 0 1 63.07 13.119 A 0.598 0.598 0 0 1 62.92 13.364 Q 62.738 13.546 62.452 13.546 L 54.132 13.546 L 54.132 13.624 L 54.132 13.728 A 4.408 4.408 0 0 0 54.246 14.599 A 3.714 3.714 0 0 0 54.405 15.106 Q 54.652 15.73 55.133 16.094 Q 55.614 16.458 56.316 16.458 Q 56.734 16.458 57.043 16.349 A 1.434 1.434 0 0 0 57.187 16.289 A 2.661 2.661 0 0 0 57.506 16.109 A 1.991 1.991 0 0 0 57.772 15.899 Q 57.925 15.754 58.034 15.637 A 2.859 2.859 0 0 0 58.136 15.522 A 3.096 3.096 0 0 1 58.246 15.395 Q 58.352 15.279 58.435 15.218 A 0.456 0.456 0 0 1 58.513 15.171 A 0.536 0.536 0 0 1 58.607 15.14 Q 58.71 15.114 58.864 15.108 A 2.588 2.588 0 0 1 58.968 15.106 L 62.192 15.106 A 0.711 0.711 0 0 1 62.395 15.134 A 0.566 0.566 0 0 1 62.621 15.262 Q 62.787 15.415 62.765 15.669 A 0.738 0.738 0 0 1 62.764 15.678 A 1.341 1.341 0 0 1 62.7 16.003 Q 62.604 16.307 62.366 16.677 A 4.834 4.834 0 0 1 62.322 16.744 Q 61.968 17.275 61.342 17.796 A 7.811 7.811 0 0 1 61.113 17.979 Q 60.37 18.552 59.272 18.93 A 9.229 9.229 0 0 1 59.124 18.98 Q 58.003 19.346 56.539 19.368 A 12.604 12.604 0 0 1 56.342 19.37 A 9.178 9.178 0 0 1 54.298 19.155 Q 52.725 18.796 51.602 17.837 A 5.849 5.849 0 0 1 51.454 17.706 A 5.45 5.45 0 0 1 49.958 15.324 Q 49.682 14.48 49.594 13.463 A 11.159 11.159 0 0 1 49.556 12.766 L 49.556 12.298 L 49.556 11.856 Q 49.634 9.802 50.479 8.333 Q 51.324 6.864 52.819 6.097 A 6.842 6.842 0 0 1 54.872 5.44 A 9.107 9.107 0 0 1 56.316 5.33 Q 58.604 5.33 60.099 6.24 Q 61.594 7.15 62.348 8.71 Q 63.102 10.27 63.102 12.272 Z M 10.114 17.888 L 0.754 11.518 A 3.789 3.789 0 0 1 0.505 11.325 Q 0.317 11.165 0.195 11.011 A 0.897 0.897 0 0 1 0.014 10.585 A 1.203 1.203 0 0 1 0 10.4 L 0 9.594 A 1.277 1.277 0 0 1 0.029 9.316 Q 0.074 9.111 0.193 8.959 A 0.801 0.801 0 0 1 0.195 8.957 Q 0.39 8.71 0.754 8.45 L 10.114 2.08 Q 10.244 2.028 10.361 1.976 Q 10.475 1.925 10.552 1.924 A 0.237 0.237 0 0 1 10.556 1.924 A 0.63 0.63 0 0 1 10.751 1.953 A 0.525 0.525 0 0 1 10.946 2.067 A 0.474 0.474 0 0 1 11.1 2.387 A 0.654 0.654 0 0 1 11.102 2.444 L 11.102 5.252 Q 11.102 5.58 10.957 5.786 A 0.673 0.673 0 0 1 10.868 5.889 A 2.89 2.89 0 0 1 10.414 6.241 A 2.672 2.672 0 0 1 10.374 6.266 L 4.706 9.984 L 10.374 13.728 Q 10.634 13.884 10.868 14.092 A 0.658 0.658 0 0 1 11.06 14.402 Q 11.093 14.51 11.1 14.641 A 1.381 1.381 0 0 1 11.102 14.716 L 11.102 17.524 A 0.577 0.577 0 0 1 11.067 17.729 A 0.518 0.518 0 0 1 10.946 17.914 A 0.526 0.526 0 0 1 10.571 18.07 A 0.691 0.691 0 0 1 10.556 18.07 Q 10.48 18.07 10.366 18.02 A 1.028 1.028 0 0 1 10.361 18.018 A 2.054 2.054 0 0 1 10.225 17.951 A 2.646 2.646 0 0 1 10.114 17.888 Z M 89.414 17.524 L 89.414 14.716 A 1.176 1.176 0 0 1 89.437 14.476 Q 89.467 14.333 89.536 14.224 A 0.621 0.621 0 0 1 89.648 14.092 Q 89.882 13.884 90.142 13.728 L 95.784 9.984 L 90.142 6.266 A 2.854 2.854 0 0 1 89.677 5.916 A 3.158 3.158 0 0 1 89.648 5.889 Q 89.414 5.668 89.414 5.252 L 89.414 2.444 A 0.569 0.569 0 0 1 89.44 2.269 A 0.462 0.462 0 0 1 89.57 2.067 Q 89.726 1.924 89.934 1.924 A 0.475 0.475 0 0 1 90.053 1.94 A 0.657 0.657 0 0 1 90.155 1.976 A 5.591 5.591 0 0 1 90.322 2.053 A 4.834 4.834 0 0 1 90.376 2.08 L 99.762 8.45 A 3.437 3.437 0 0 1 100.003 8.625 Q 100.115 8.715 100.201 8.803 A 1.446 1.446 0 0 1 100.334 8.957 A 0.894 0.894 0 0 1 100.481 9.28 Q 100.512 9.405 100.515 9.552 A 1.622 1.622 0 0 1 100.516 9.594 L 100.516 10.4 A 1.205 1.205 0 0 1 100.484 10.686 A 0.901 0.901 0 0 1 100.334 11.011 Q 100.203 11.189 99.964 11.373 A 3.563 3.563 0 0 1 99.762 11.518 L 90.376 17.888 Q 90.272 17.966 90.155 18.018 A 0.655 0.655 0 0 1 90.052 18.054 A 0.474 0.474 0 0 1 89.934 18.07 A 0.496 0.496 0 0 1 89.58 17.924 A 0.651 0.651 0 0 1 89.57 17.914 A 0.526 0.526 0 0 1 89.414 17.539 A 0.691 0.691 0 0 1 89.414 17.524 Z M 34.736 19.11 L 31.512 19.11 A 0.685 0.685 0 0 1 31.282 19.073 A 0.593 0.593 0 0 1 31.044 18.915 Q 30.862 18.72 30.862 18.46 L 30.862 6.24 Q 30.862 5.98 31.044 5.785 A 0.604 0.604 0 0 1 31.477 5.591 A 0.811 0.811 0 0 1 31.512 5.59 L 34.502 5.59 A 0.691 0.691 0 0 1 34.773 5.642 A 0.655 0.655 0 0 1 34.983 5.785 Q 35.178 5.98 35.178 6.24 L 35.178 7.28 Q 35.854 6.474 36.829 6.032 A 4.941 4.941 0 0 1 38.286 5.633 A 6.172 6.172 0 0 1 39.026 5.59 L 40.17 5.59 A 0.734 0.734 0 0 1 40.393 5.622 A 0.598 0.598 0 0 1 40.638 5.772 Q 40.82 5.954 40.82 6.24 L 40.82 8.918 Q 40.82 9.178 40.638 9.373 A 0.604 0.604 0 0 1 40.205 9.567 A 0.811 0.811 0 0 1 40.17 9.568 L 37.648 9.568 A 3.118 3.118 0 0 0 36.986 9.634 Q 36.559 9.727 36.239 9.95 A 1.794 1.794 0 0 0 35.997 10.153 A 1.906 1.906 0 0 0 35.509 11.017 Q 35.427 11.316 35.414 11.671 A 3.722 3.722 0 0 0 35.412 11.804 L 35.412 18.46 Q 35.412 18.72 35.217 18.915 A 0.652 0.652 0 0 1 34.745 19.11 A 0.833 0.833 0 0 1 34.736 19.11 Z M 69.264 19.11 L 66.196 19.11 A 0.685 0.685 0 0 1 65.966 19.073 A 0.593 0.593 0 0 1 65.728 18.915 Q 65.546 18.72 65.546 18.46 L 65.546 1.3 A 0.734 0.734 0 0 1 65.578 1.077 A 0.598 0.598 0 0 1 65.728 0.832 Q 65.91 0.65 66.196 0.65 L 69.264 0.65 A 0.734 0.734 0 0 1 69.487 0.682 A 0.598 0.598 0 0 1 69.732 0.832 Q 69.914 1.014 69.914 1.3 L 69.914 18.46 Q 69.914 18.72 69.732 18.915 A 0.604 0.604 0 0 1 69.299 19.109 A 0.811 0.811 0 0 1 69.264 19.11 Z M 46.384 19.11 L 43.316 19.11 A 0.685 0.685 0 0 1 43.086 19.073 A 0.593 0.593 0 0 1 42.848 18.915 Q 42.666 18.72 42.666 18.46 L 42.666 6.24 A 0.734 0.734 0 0 1 42.698 6.017 A 0.598 0.598 0 0 1 42.848 5.772 Q 43.03 5.59 43.316 5.59 L 46.384 5.59 A 0.734 0.734 0 0 1 46.607 5.622 A 0.598 0.598 0 0 1 46.852 5.772 Q 47.034 5.954 47.034 6.24 L 47.034 18.46 Q 47.034 18.72 46.852 18.915 A 0.604 0.604 0 0 1 46.419 19.109 A 0.811 0.811 0 0 1 46.384 19.11 Z M 79.846 15.886 A 3.491 3.491 0 0 0 80.36 15.85 Q 80.884 15.772 81.224 15.522 A 2.008 2.008 0 0 0 81.895 14.649 A 2.467 2.467 0 0 0 81.939 14.534 A 4.839 4.839 0 0 0 82.156 13.659 A 5.947 5.947 0 0 0 82.212 13.156 Q 82.264 12.35 82.212 11.544 A 5.631 5.631 0 0 0 82.091 10.694 A 4.621 4.621 0 0 0 81.939 10.166 A 2.162 2.162 0 0 0 81.592 9.531 A 1.951 1.951 0 0 0 81.224 9.178 Q 80.833 8.89 80.197 8.83 A 3.741 3.741 0 0 0 79.846 8.814 A 3.004 3.004 0 0 0 79.277 8.865 Q 78.823 8.952 78.494 9.191 Q 77.974 9.568 77.74 10.166 A 4.314 4.314 0 0 0 77.485 11.164 A 5.028 5.028 0 0 0 77.454 11.466 Q 77.428 11.96 77.428 12.428 A 18.858 18.858 0 0 0 77.44 13.096 A 22.107 22.107 0 0 0 77.454 13.416 A 3.147 3.147 0 0 0 77.708 14.555 A 3.027 3.027 0 0 0 77.74 14.625 Q 78 15.184 78.52 15.535 Q 79.04 15.886 79.846 15.886 Z M 46.41 3.64 L 43.29 3.64 A 0.734 0.734 0 0 1 43.067 3.608 A 0.598 0.598 0 0 1 42.822 3.458 Q 42.64 3.276 42.64 2.99 L 42.64 0.65 Q 42.64 0.39 42.822 0.195 A 0.604 0.604 0 0 1 43.255 0.001 A 0.811 0.811 0 0 1 43.29 0 L 46.41 0 Q 46.67 0 46.865 0.195 Q 47.06 0.39 47.06 0.65 L 47.06 2.99 A 0.685 0.685 0 0 1 47.023 3.22 A 0.593 0.593 0 0 1 46.865 3.458 Q 46.67 3.64 46.41 3.64 Z M 54.132 10.92 L 54.132 10.972 L 58.526 10.972 L 58.526 10.92 A 5.005 5.005 0 0 0 58.485 10.264 Q 58.441 9.926 58.347 9.638 A 2.834 2.834 0 0 0 58.279 9.451 A 2.143 2.143 0 0 0 57.91 8.839 A 1.925 1.925 0 0 0 57.525 8.502 A 1.998 1.998 0 0 0 56.695 8.191 A 2.609 2.609 0 0 0 56.316 8.164 A 2.274 2.274 0 0 0 55.704 8.243 A 1.868 1.868 0 0 0 55.146 8.502 A 2.054 2.054 0 0 0 54.498 9.231 A 2.565 2.565 0 0 0 54.392 9.451 A 3.08 3.08 0 0 0 54.199 10.112 Q 54.145 10.415 54.134 10.759 A 5.435 5.435 0 0 0 54.132 10.92 Z"/>   
    </svg>
  );
};