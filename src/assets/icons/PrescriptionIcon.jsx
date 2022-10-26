import React from "react";
import { colors } from "../../styles/theme";

function PrescriptionIcon({ sx }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7854_224796)">
        <path
          d="M16.2105 21.5307V21.4286H3.57895V2.57143H9.89474V7.28571C9.89474 8.15 10.6053 8.85714 11.4737 8.85714H16.2105V8.87286L17.7895 7.30143V7.28571C17.7895 7.05 17.7105 6.89286 17.5526 6.73571L12.0263 1.23571C11.8684 1.07857 11.7105 1 11.4737 1H3.57895C2.71053 1 2 1.70714 2 2.57143V21.4286C2 22.2929 2.71053 23 3.57895 23H16.2105C17.0789 23 17.7895 22.2929 17.7895 21.4286V19.9593L16.2105 21.5307ZM11.4737 2.88571L15.8947 7.28571H11.4737V2.88571ZM22.6449 10.9862L20.0002 8.28339C19.8817 8.16554 19.7396 8.07125 19.5896 8.00839C19.4317 7.94554 19.2738 7.90625 19.1002 7.90625C18.9265 7.90625 18.7686 7.93768 18.6107 8.00054C18.4528 8.06339 18.3186 8.15768 18.1923 8.27554L11.7738 14.8205L10.8738 18.6391C10.8344 18.8198 10.8344 19.0163 10.8738 19.197C10.9212 19.3777 11.0002 19.5584 11.1186 19.6998C11.237 19.8491 11.387 19.967 11.5528 20.0534C11.7186 20.132 11.9081 20.1791 12.0975 20.1791C12.1923 20.187 12.2949 20.1948 12.3896 20.1791L16.2265 19.3541L22.6212 12.7934C22.7396 12.6755 22.8344 12.5341 22.8975 12.377C22.9607 12.2198 23.0002 12.0548 23.0002 11.882C23.0002 11.7091 22.9686 11.5441 22.9054 11.387C22.8451 11.2369 22.756 11.1083 22.6449 10.9807V10.9784L22.6291 10.9627L22.6449 10.9807V10.9862ZM12.5317 18.5134L15.4287 17.8849L19.1475 14.0348L16.937 11.772L13.2186 15.6298L12.5317 18.5134ZM20.0554 13.1234L17.8449 10.8605L19.0765 9.61125L21.3028 11.8898L20.0554 13.1234ZM8.63928 9.31277C8.78139 9.46206 8.86033 9.65849 8.86033 9.86277V10.8449L9.69718 10.3578C9.78402 10.3106 9.87875 10.2792 9.98139 10.2635C10.084 10.2478 10.1866 10.2556 10.2814 10.2792C10.3761 10.3106 10.4709 10.3499 10.5498 10.4128C10.6288 10.4756 10.6998 10.5542 10.7472 10.6406C10.7945 10.7271 10.8261 10.8213 10.8419 10.9235C10.8498 11.0335 10.8419 11.1356 10.8182 11.2299C10.7945 11.3242 10.7472 11.4185 10.684 11.4971C10.6209 11.5756 10.5419 11.6463 10.4551 11.6935L9.61823 12.1806L10.4551 12.6678C10.5419 12.7149 10.6209 12.7856 10.684 12.8642C10.7472 12.9428 10.7945 13.0371 10.8182 13.1313C10.8419 13.2335 10.8577 13.3356 10.8419 13.4378C10.834 13.5399 10.7945 13.6342 10.7472 13.7206C10.6998 13.8149 10.6288 13.8856 10.5498 13.9485C10.4709 14.0113 10.3761 14.0585 10.2814 14.0821C10.1866 14.0978 10.084 14.1135 9.98139 14.0978C9.87875 14.0899 9.78402 14.0506 9.69718 14.0035L8.86033 13.5163V14.4985C8.86033 14.7028 8.78139 14.9071 8.63928 15.0485C8.48928 15.1899 8.29981 15.2685 8.09454 15.2685C7.88928 15.2685 7.69191 15.1899 7.54981 15.0485C7.4077 14.8992 7.32876 14.7028 7.32876 14.4985V13.5163L6.49191 14.0035C6.40507 14.0506 6.31033 14.0821 6.2077 14.0978C6.10507 14.1135 6.00244 14.1056 5.9077 14.0821C5.81297 14.0506 5.71823 14.0113 5.63928 13.9485C5.56033 13.8856 5.48928 13.8071 5.44191 13.7206C5.39454 13.6342 5.36297 13.5399 5.34718 13.4378C5.33928 13.3278 5.34718 13.2256 5.37086 13.1313C5.39454 13.0371 5.44191 12.9428 5.50507 12.8642C5.56823 12.7856 5.64718 12.7149 5.73402 12.6678L6.57086 12.1806L5.73402 11.6935C5.64718 11.6463 5.56823 11.5756 5.50507 11.4971C5.44191 11.4185 5.39454 11.3242 5.37086 11.2299C5.34718 11.1278 5.33139 11.0256 5.34718 10.9235C5.35507 10.8213 5.39454 10.7271 5.44191 10.6406C5.48928 10.5463 5.56033 10.4756 5.63928 10.4128C5.71823 10.3499 5.81297 10.3028 5.9077 10.2792C6.00244 10.2635 6.10507 10.2478 6.2077 10.2635C6.31033 10.2713 6.40507 10.3106 6.49191 10.3578L7.32876 10.8449V9.86277C7.32876 9.65849 7.4077 9.4542 7.54981 9.31277C7.69981 9.17134 7.88928 9.09277 8.09454 9.09277C8.29981 9.09277 8.49718 9.17134 8.63928 9.31277Z"
          fill={colors.darkGreen}
          {...sx}
        />
      </g>
      <defs>
        <clipPath id="clip0_7854_224796">
          <rect
            width="21"
            height="22"
            fill="white"
            transform="translate(2 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PrescriptionIcon;
