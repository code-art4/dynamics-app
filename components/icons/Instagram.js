export default function InstagramIcon({ fill, width, height }) {
    return (
        <svg
            width={width ? width : 41}
            height={height ? height : 41}
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2748 0.916668H28.7248C34.9915 0.916668 40.0832 6.00834 40.0832 12.275V28.725C40.0832 31.7374 38.8865 34.6265 36.7564 36.7566C34.6263 38.8867 31.7373 40.0833 28.7248 40.0833H12.2748C6.00817 40.0833 0.916504 34.9917 0.916504 28.725V12.275C0.916504 9.26258 2.11318 6.37355 4.24328 4.24345C6.37338 2.11335 9.26242 0.916668 12.2748 0.916668ZM11.8832 4.83333C10.0134 4.83333 8.2202 5.5761 6.89807 6.89823C5.57594 8.22036 4.83317 10.0136 4.83317 11.8833V29.1167C4.83317 33.0138 7.98609 36.1667 11.8832 36.1667H29.1165C30.9863 36.1667 32.7795 35.4239 34.1016 34.1018C35.4237 32.7796 36.1665 30.9864 36.1665 29.1167V11.8833C36.1665 7.98625 33.0136 4.83333 29.1165 4.83333H11.8832ZM30.7811 7.77083C31.4303 7.77083 32.053 8.02874 32.512 8.48781C32.9711 8.94689 33.229 9.56952 33.229 10.2188C33.229 10.868 32.9711 11.4906 32.512 11.9497C32.053 12.4088 31.4303 12.6667 30.7811 12.6667C30.1319 12.6667 29.5092 12.4088 29.0501 11.9497C28.5911 11.4906 28.3332 10.868 28.3332 10.2188C28.3332 9.56952 28.5911 8.94689 29.0501 8.48781C29.5092 8.02874 30.1319 7.77083 30.7811 7.77083ZM20.4998 10.7083C23.0967 10.7083 25.5873 11.74 27.4236 13.5762C29.2599 15.4125 30.2915 17.9031 30.2915 20.5C30.2915 23.0969 29.2599 25.5875 27.4236 27.4238C25.5873 29.26 23.0967 30.2917 20.4998 30.2917C17.9029 30.2917 15.4124 29.26 13.5761 27.4238C11.7398 25.5875 10.7082 23.0969 10.7082 20.5C10.7082 17.9031 11.7398 15.4125 13.5761 13.5762C15.4124 11.74 17.9029 10.7083 20.4998 10.7083ZM20.4998 14.625C18.9417 14.625 17.4474 15.244 16.3456 16.3457C15.2438 17.4475 14.6248 18.9419 14.6248 20.5C14.6248 22.0581 15.2438 23.5525 16.3456 24.6543C17.4474 25.756 18.9417 26.375 20.4998 26.375C22.058 26.375 23.5523 25.756 24.6541 24.6543C25.7559 23.5525 26.3748 22.0581 26.3748 20.5C26.3748 18.9419 25.7559 17.4475 24.6541 16.3457C23.5523 15.244 22.058 14.625 20.4998 14.625Z"
                fill={fill ? fill : "#03A9F4"} />
        </svg>
    );
}
