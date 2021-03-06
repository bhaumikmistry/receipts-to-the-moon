version_file_path = "docs/js/version.js"

def ReadAndUpdateVersionFile(file_name):
    with open(version_file_path, "r") as read_file:
        version_file_lines = read_file.readlines()

    bump_line = version_file_lines[1]
    print(f'bump={bump_line}')
    split_bump_line = bump_line.split('\"')
    print(f'splitbump={split_bump_line}')

    print(f'bump={bool(int(split_bump_line[1]))}')
    bool_bump = bool(int(split_bump_line[1]))
    if bool_bump:
        split_bump_line[1] = '0'
        sep = '\"'
        join_bump_line = sep.join(split_bump_line)
        print(f'joinbump={join_bump_line}')
        version_file_lines[1] = join_bump_line

    version_line = version_file_lines[0]
    split_version_line = version_line.split('"')
    print(split_version_line)

    version_text = split_version_line[1]
    version_number = version_text.split('.')
    print(f'version_number={version_number}')
    if bool_bump:
        version_number[-2] = str(int(version_number[-2]) + 1)
        version_number[-1] = str(int(0))
    else:
        version_number[-1] = str(int(version_number[-1]) + 1)
    sep = '.'
    join_version_number = sep.join(version_number)
    print(f'join_version_number = {join_version_number}')
    split_version_line[1]=join_version_number
    sep = '\"'
    join_version_line = sep.join(split_version_line)
    version_file_lines[0] = join_version_line
    print(f'version_file_lines{version_file_lines}')

    # and write everything back
    with open('docs/js/version.js', 'w') as file:
        file.writelines(version_file_lines)

ReadAndUpdateVersionFile(version_file_path)